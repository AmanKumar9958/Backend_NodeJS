const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();


cloudinary.config({
    cloud_name: process.env.CLOUDNIARY_NAME,
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'Drive',    // your folder name in cloudinary..
        allowed_formats: ['jpg', 'png', 'jpeg', 'pdf', 'mp4', 'mp3', 'txt'], // allowed formats..
    },
});

module.exports = {
    cloudinary,
    storage,
}