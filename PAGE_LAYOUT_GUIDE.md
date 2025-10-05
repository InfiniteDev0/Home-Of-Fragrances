# Page Layout Guidelines

## Fixed Navbar Solution

The navbar is fixed at the top with `fixed w-full z-50`, which means all page content needs proper spacing to appear below it.

## Current Solution

### ClientWrapper Update
✅ **Implemented**: Added `<main className="pt-32">` wrapper in `ClientWrapper.jsx`
- All pages now automatically get proper top padding
- No need to add individual padding to each page
- Consistent across the entire application

### Page Structure Guidelines

All pages should follow this structure:

```jsx
export default function YourPage() {
  return (
    <div className="px-[5%] py-5">
      {/* Your page content here */}
      <h1>Page Title</h1>
      <p>Page content...</p>
    </div>
  );
}
```

### CSS Classes Available

#### Standard Page Container
```jsx
<div className="px-[5%] py-5">
  {/* Standard page with 5% horizontal padding */}
</div>
```

#### Full Width Page
```jsx
<div className="px-0 py-5">
  {/* Full width page with no horizontal padding */}
</div>
```

## Files Updated

1. **ClientWrapper.jsx**: Added `<main className="pt-32">` wrapper
   - Automatically handles navbar spacing for ALL pages
   - No individual page modifications needed

2. **page.js** (Home): Added demo content with proper structure

3. **brands/[id]/page.js**: Already properly structured

## Navbar Height Calculation

The navbar consists of:
- Top header bar: ~2rem (py-2)
- Main navbar: ~4rem (logo + padding)
- Navigation menu: ~2rem
- **Total**: ~8rem (32 in Tailwind = pt-32)

## How to Create New Pages

Simply create your page with the standard structure - no special navbar considerations needed:

```jsx
// Any new page
export default function NewPage() {
  return (
    <div className="px-[5%] py-5">
      {/* Content automatically appears below navbar */}
      <h1>New Page</h1>
    </div>
  );
}
```

## Benefits

✅ **Automatic**: All pages get proper spacing
✅ **Consistent**: Same padding across all pages  
✅ **Maintainable**: Change navbar height in one place
✅ **No repetition**: No need to remember padding on each page
✅ **Responsive**: Works across all screen sizes

## Special Cases

If you need custom spacing for a specific page:
```jsx
// Override the global padding if needed
<div className="pt-40 px-[5%] py-5">
  {/* Custom top padding */}
</div>
```