# 📚 Material Repository

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)
![HTML](https://img.shields.io/badge/HTML-83.4%25-orange)
![CSS](https://img.shields.io/badge/CSS-9.0%25-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-4.2%25-yellow)
![PowerShell](https://img.shields.io/badge/PowerShell-4.0%25-blue)

> **Everything you need for your exams, all in one place**

A comprehensive web-based educational material repository designed to help students access study materials, notes, assignments, and resources across multiple subjects.

---

## 🌟 Features

- **📖 11+ Subject Collections**: Curated materials for MTH166, CSE121, CSE320, INT306, PHY110, ECE249, ECE279, MEC136, CHE110, PEL121-125, and Books
- **🎯 Organized Content**: Materials categorized by subjects with easy navigation
- **📥 Direct Downloads**: Instant access to PDFs, PPTs, images, and other study resources
- **🎨 Modern UI/UX**: Clean, responsive design with smooth animations
- **🔍 Smart Organization**: Folders and subfolders for different units and topics
- **📱 Mobile Responsive**: Accessible on any device - desktop, tablet, or mobile
- **⚡ Fast Loading**: Optimized performance with loading animations

---

## 🚀 Live Demo

**[Visit Material Repository →](https://devpandey347.github.io/Material-Repository/)**

---

## 📂 Repository Structure

```
Material-Repository/
├── index.html              # Main landing page
├── style.css               # Main stylesheet
├── script.js               # Main JavaScript logic
├── subject-style.css       # Subject page styling
├── subject-script.js       # Subject page interactions
├── files/                  # All educational materials
│   ├── MTH166/            # Differential Equations & Vector Calculus
│   ├── CSE121/            # Computer Science Fundamentals
│   ├── CSE320/            # Course Materials & Notes
│   ├── INT306/            # Database Management Systems
│   ├── PHY110/            # Engineering Physics
│   ├── ECE249/            # Basic Electrical & Electronics
│   ├── ECE279/            # ECE Lab Experiments
│   ├── MEC136/            # Engineering Graphics & Drawing
│   ├── CHE110/            # Environmental Chemistry
│   ├── PEL121-125/        # Professional English Language
│   └── Books/             # C & Python Programming Handbooks
├── subjects/               # Subject-specific HTML pages
│   ├── MTH166.html
│   ├── CSE121.html
│   ├── CSE320.html
│   ├── INT306.html
│   └── ...
├── generate-subjects.ps1   # PowerShell script to generate subject pages
└── regenerate-manual.ps1   # Manual regeneration script
```

---

## 📚 Available Subjects

| Subject Code | Description | Files Count |
|-------------|-------------|-------------|
| **MTH166** | Differential Equation And Vector Calculus | 42 files |
| **CSE121** | Computer Science Fundamentals | 6 files |
| **CSE320** | Course Materials & Notes | 27 files |
| **INT306** | Database Management Systems | 29 files |
| **PEL121-125** | Professional English Language | 21 files |
| **CHE110** | Environmental Chemistry | 15 files |
| **ECE249** | Basic Electrical & Electronics Engineering | 21 files |
| **ECE279** | ECE Lab Experiments & Images | 64 files |
| **MEC136** | Engineering Graphics & Drawing | 35 files |
| **PHY110** | Engineering Physics | 45 files |
| **Books** | C & Python Programming Handbooks | 2 files |

**Total Resources: 307+ files** 📊

---

## 🛠️ Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling and animations
- **JavaScript** - Interactive functionality
- **PowerShell** - Automation scripts for page generation
- **GitHub Pages** - Hosting platform

---

## 💻 Local Development

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- Text editor (VS Code, Sublime Text, etc.)
- PowerShell (for automation scripts)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/devpandey347/Material-Repository.git
   cd Material-Repository
   ```

2. **Open locally**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

3. **Access the site**
   - Navigate to `http://localhost:8000` (if using a server)
   - Or directly open the HTML file

---

## 🔧 Automation Scripts

### Generate Subject Pages
Use the PowerShell script to automatically generate HTML pages for subjects:

```powershell
.
\generate-subjects.ps1
```

### Regenerate Pages Manually
```powershell
.
\regenerate-manual.ps1
```

These scripts:
- ✅ Scan the `files/` directory structure
- ✅ Count files in each subject folder
- ✅ Generate subject-specific HTML pages
- ✅ Update file listings automatically

---

## 📝 Adding New Materials

### Step 1: Add Files
1. Navigate to the appropriate subject folder in `files/`
2. Add your PDF, PPT, or other study materials
3. Organize in subfolders if needed

### Step 2: Update Subject Page
- Run the automation script to update the pages automatically
- Or manually edit the corresponding HTML file in `subjects/`

### Step 3: Commit Changes
```bash
git add .
git commit -m "Add new materials for [Subject]"
git push origin main
```

---

## 🎨 Customization

### Change Theme Colors
Edit `style.css` and `subject-style.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --background: #0f172a;
}
```

### Modify Content
- **Landing Page**: Edit `index.html`
- **Subject Pages**: Edit files in `subjects/` folder
- **Styling**: Modify `style.css` or `subject-style.css`
- **Interactions**: Update `script.js` or `subject-script.js`

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
git checkout -b feature/AmazingFeature
```
3. **Commit your changes**
   ```bash
git commit -m 'Add some AmazingFeature'
```
4. **Push to the branch**
   ```bash
git push origin feature/AmazingFeature
```
5. **Open a Pull Request**

### Contribution Ideas
- 📚 Add more study materials
- 🐛 Fix bugs or issues
- ✨ Improve UI/UX design
- 📱 Enhance mobile responsiveness
- 🔍 Add search functionality
- 📊 Create analytics dashboard

---

## 📱 Connect & Stay Updated

- 🌐 **Portfolio**: [Visit My Portfolio](https://devprotfolio-aavuiqxvf-dev-pandeys-projects-24e9f338.vercel.app/)
- 💬 **WhatsApp Community**: [Join for Updates](https://chat.whatsapp.com/ElGakQUGGa1IMam5FlAiqw)
- 📧 **GitHub**: [@devpandey347](https://github.com/devpandey347)

---

## 📜 License

This project is open source and available for educational purposes. Feel free to use it for your studies!

---

## 🙏 Acknowledgments

- Thanks to all contributors who help maintain this repository
- Special thanks to students who provide feedback and suggestions
- Built with ❤️ for the student community

---

## 📊 Repository Stats

![Repo Size](https://img.shields.io/github/repo-size/devpandey347/Material-Repository)
![Last Commit](https://img.shields.io/github/last-commit/devpandey347/Material-Repository)
![Issues](https://img.shields.io/github/issues/devpandey347/Material-Repository)
![Pull Requests](https://img.shields.io/github/issues-pr/devpandey347/Material-Repository)

---

## 💡 Tips for Students

1. **Bookmark the site** for quick access during exams
2. **Download materials** ahead of time in case of connectivity issues
3. **Share with classmates** to help everyone succeed
4. **Report broken links** or missing materials via Issues
5. **Suggest improvements** through Pull Requests

---

## 📅 Updates

- **2026-01-23**: Repository created with initial materials
- More updates coming soon! 🚀

---

<div align="center">

### 🌟 If this repository helped you, please give it a star! ⭐

**Happy Studying! 📚✨**

Made with 💜 by [Dev Pandey](https://github.com/devpandey347)

</div>