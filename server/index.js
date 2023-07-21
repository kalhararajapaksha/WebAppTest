const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const multer = require('multer');
const path = require('path');

const serviceAccount = require('./reactapp-fa184-firebase-adminsdk-liquf-bb4363f75d.json');
admin.initializeApp({ credential: admin.credential.cert(serviceAccount),storageBucket: 'gs://reactapp-fa184.appspot.com', });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


const storage = admin.storage().bucket();


app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRecord = await admin.auth().createUser({ email, password });
    res.status(201).json({ userId: userRecord.uid });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRecord = await admin.auth().getUserByEmail(email);
    res.status(200).json({ userId: userRecord.uid });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

app.post('/api/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      throw new Error('No image file provided.');
    }
    const userToken = req.headers.authorization;
    if (!userToken) {
      throw new Error('User token not found in request headers.');
    }
    const fileExtension = path.extname(req.file.originalname);
    const fileName = `${userToken}${fileExtension}`;

    const existingFile = storage.file(fileName);
    const [existingFileExists] = await existingFile.exists();
    if (existingFileExists) {
      await existingFile.delete();
    }

 
    const fileUpload = storage.file(fileName);
    const blobStream = fileUpload.createWriteStream({ metadata: { contentType: req.file.mimetype } });
    blobStream.on('error', (error) => {
      throw new Error('Error uploading the image.');
    });
    blobStream.on('finish', async () => {
      try {
        const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${storage.name}/o/${fileName}?alt=media`;
        res.status(200).json({ imageUrl });
      } catch (error) {
        throw new Error('Error getting file metadata.');
      }
    });
    blobStream.end(req.file.buffer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// app.post('/api/upload', upload.single('image'), async (req, res) => {
//   try {
//     if (!req.file) {
//       throw new Error('No image file provided.');
//     }
//     const userToken = req.headers.authorization;
//     if (!userToken) {
//       throw new Error('User token not found in request headers.');
//     }
//     // Create a unique file name 
//     const fileExtension = path.extname(req.file.originalname);
//     //const fileName = `${Date.now()}_${Math.floor(Math.random() * 10000)}${fileExtension}`;
//     const fileName =`${userToken}${fileExtension}`;

//     const fileUpload = storage.file(fileName);
//     const blobStream = fileUpload.createWriteStream({ metadata: { contentType: req.file.mimetype } });
//     blobStream.on('error', (error) => {
//       throw new Error('Error uploading the image.');
//     });
//     blobStream.on('finish', async () => {
//       try {
//         //const [metadata] = await fileUpload.getMetadata();
//         const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${storage.name}/o/${fileName}?alt=media`;
//         res.status(200).json({ imageUrl });

//       } catch (error) {
//         throw new Error('Error getting file metadata.');
//       }
//     });
//     blobStream.end(req.file.buffer);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// Endpoint to save user object to Firestore
app.post('/api/saveUser', async (req, res) => {
  const userObject = req.body.userObject;
  const userId = userObject.userId; 
  try {
    
    await admin.firestore().collection('users').doc(userObject.userId).set(userObject);
    res.status(201).json({ userId }); 
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


app.get('/api/getUser/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    
    const userDoc =await admin.firestore().collection('users').doc(userId).get();

    if (userDoc.exists) {
      
      const userData = userDoc.data();
      res.status(200).json(userData);
    } else {
      
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
});
