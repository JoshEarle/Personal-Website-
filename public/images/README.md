# Images Directory

Place your photos here for the pics page. They will be accessible at `/images/filename.jpg`

## How to Upload Photos

1. **Add your image files** to this folder (`/public/images/`)
   - Drag and drop image files directly into this folder
   - Or use your terminal: `cp ~/path/to/your/image.jpg public/images/`

2. **Update the pics array** in `app/pics/page.tsx`:
   ```javascript
   const pics = [
     {
       id: 1,
       title: "your photo title",
       imageUrl: "/images/your-filename.jpg",
       date: "DEC 15, 25",
       aspectRatio: "portrait", // optional: "portrait", "landscape", or "square"
     },
     // Add more photos...
   ];
   ```

## Example Usage

If you add `sunset.jpg` to this folder, reference it as:
- `/images/sunset.jpg`

## Supported Formats

- JPG/JPEG
- PNG
- GIF
- WebP (recommended for web - better compression)

## Tips

- Use descriptive filenames (e.g., `sf-sunset-2024.jpg` instead of `IMG_1234.jpg`)
- Optimize images for web (keep file sizes reasonable, aim for < 500KB per image)
- Consider using WebP format for better compression
- The collage layout will automatically arrange your photos in a masonry grid

