class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: #1e293b;
        }
        .footer-link:hover {
          color: #818cf8;
        }
      </style>
      <footer class="text-gray-300 py-12">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 class="text-white text-lg font-semibold mb-4">ReelCutter Pro</h3>
              <p class="mb-4">Transform your long videos into engaging Instagram Reels with automatic subtitles.</p>
              <div class="flex space-x-4">
                <a href="#" class="footer-link"><i data-feather="twitter"></i></a>
                <a href="#" class="footer-link"><i data-feather="instagram"></i></a>
                <a href="#" class="footer-link"><i data-feather="facebook"></i></a>
              </div>
            </div>
            <div>
              <h4 class="text-white text-lg font-semibold mb-4">Features</h4>
              <ul class="space-y-2">
                <li><a href="#" class="footer-link">Video Splitting</a></li>
                <li><a href="#" class="footer-link">Auto Subtitles</a></li>
                <li><a href="#" class="footer-link">Custom Styles</a></li>
                <li><a href="#" class="footer-link">Batch Processing</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-white text-lg font-semibold mb-4">Company</h4>
              <ul class="space-y-2">
                <li><a href="#" class="footer-link">About Us</a></li>
                <li><a href="#" class="footer-link">Careers</a></li>
                <li><a href="#" class="footer-link">Blog</a></li>
                <li><a href="#" class="footer-link">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-white text-lg font-semibold mb-4">Legal</h4>
              <ul class="space-y-2">
                <li><a href="#" class="footer-link">Privacy Policy</a></li>
                <li><a href="#" class="footer-link">Terms of Service</a></li>
                <li><a href="#" class="footer-link">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div class="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>© 2023 ReelCutter Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
