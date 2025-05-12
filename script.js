// 1. Button click event
document.getElementById('colorBtn').addEventListener('click', () => {
  document.body.style.backgroundColor =
    '#' + Math.floor(Math.random() * 16777215).toString(16);
});

// 2. Keypress detection
document.getElementById('keyInput').addEventListener('keydown', (e) => {
  const key = e.key;
  document.getElementById('keyDisplay').textContent = `Key pressed: ${key}`;
});


// 3. Double click secret
document.getElementById('secret').addEventListener('dblclick', () => {
  alert("🎉 You found the secret!");
});

// 4. Image gallery with Pexels images
const images = [
  'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg',
  'https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg'
];
let currentImage = 0;
document.getElementById('nextImage').addEventListener('click', () => {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById('galleryImage').src = images[currentImage];
});

// 5. Tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.getElementById(`tabContent${btn.dataset.tab}`).style.display = 'block';
  });
});

// 6. Form validation with real-time password feedback
const form = document.getElementById('signupForm');
const passwordInput = document.getElementById('password');
const passwordFeedback = document.getElementById('passwordFeedback');

passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length < 8) {
    passwordFeedback.textContent = 'Password too short';
    passwordFeedback.style.color = 'red';
  } else {
    passwordFeedback.textContent = 'Strong password 💪';
    passwordFeedback.style.color = 'green';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email.");
    return;
  }

  if (passwordInput.value.length < 8) {
    alert("Password must be at least 8 characters.");
    return;
  }

  alert("Form submitted successfully!");
});
