import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { diskStorage } from 'multer';
const storage = diskStorage({
    destination: (req, file, cb) => {
      try {
        // Handle destination path logic
        cb(null, './upload/HomePage/HomePageImage');
      } catch (err) {
        // Handle errors during destination assignment
        console.error('Error setting destination:', err);
        cb(err);
      }
    },
    filename: (req, file, cb) => {
      try {
        // Generate a unique filename
        const uniqueName = '_' + uuidv4() + file.originalname;
        cb(null, uniqueName);
      } catch (err) {
        // Handle errors during filename generation
        console.error('Error setting filename:', err);
        cb(err);
      }
    },
  });
  

const upload = multer({ storage: storage });
export default upload;