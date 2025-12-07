class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .navbar {
          background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
        }
        .nav-link:hover {
          opacity: 0.9;
        }
      </style>
      <nav class="navbar text-white shadow-lg">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <div class="flex items-center space-x-2">
            <i data-feather="scissors" class="w-6 h-6"></i>
            <span class="text-xl font-bold">ReelCutter Pro</span>
          </div>
          <div class="hidden md:flex space-x-6">
            <a href="#" class="nav-link font-medium">Home</a>
            <a href="#" class="nav-link font-medium">Features</a>
            <a href="#" class="nav-link font-medium">Pricing</a>
            <a href="#" class="nav-link font-medium">About</a>
          </div>
          <div class="flex items-center space-x-4">
            <button class="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Login
            </button>
            <button class="md:hidden">
              <i data-feather="menu" class="w-6 h-6"></i>
            </button>
          </div>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);
