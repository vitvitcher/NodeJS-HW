import multer from 'multer';

export const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowTypes = 'image/';
    if (file.mimetype.includes(allowTypes)) {
      cb(null, true);
    } else {
      cb(new Error('Only images allowed'), false);
    }
  }
});
