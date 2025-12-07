document.addEventListener('DOMContentLoaded', function() {
    const videoUpload = document.getElementById('video-upload');
    const processBtn = document.getElementById('process-btn');
    const resultsSection = document.getElementById('results-section');
    const reelsContainer = document.getElementById('reels-container');
    
    videoUpload.addEventListener('change', function(e) {
        if (e.target.files.length > 0) {
            const fileName = e.target.files[0].name;
            document.querySelector('.video-upload-area h3').textContent = fileName;
            document.querySelector('.video-upload-area p').textContent = 'Ready to process!';
        }
    });
    
    processBtn.addEventListener('click', function() {
        // Simulate processing
        processBtn.disabled = true;
        processBtn.innerHTML = '<i data-feather="loader" class="animate-spin mr-2"></i> Processing...';
        feather.replace();
        
        setTimeout(() => {
            // Show results after "processing"
            resultsSection.classList.remove('hidden');
            generateSampleReels();
            
            processBtn.disabled = false;
            processBtn.innerHTML = '<i data-feather="scissors" class="mr-2"></i> Generate Reels';
            feather.replace();
        }, 3000);
    });
    
    function generateSampleReels() {
        // Clear previous results
        reelsContainer.innerHTML = '';
        
        // Generate 6 sample reels (in a real app, these would come from actual processing)
        for (let i = 1; i <= 6; i++) {
            const reel = document.createElement('div');
            reel.className = 'bg-white rounded-lg overflow-hidden shadow-md';
            reel.innerHTML = `
                <div class="relative pb-[177.78%] bg-gray-200">
                    <div class="absolute inset-0 flex items-center justify-center">
                        <i data-feather="play" class="w-12 h-12 text-white opacity-80"></i>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                        <div class="text-white font-medium">Reel Part ${i}</div>
                        <div class="text-white text-sm">00:${i < 10 ? '0'+i : i}</div>
                    </div>
                </div>
                <div class="p-4">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-sm text-gray-500">With subtitles</span>
                        <button class="text-blue-500 hover:text-blue-700">
                            <i data-feather="download" class="w-4 h-4"></i>
                        </button>
                    </div>
                </div>
            `;
            reelsContainer.appendChild(reel);
        }
        
        feather.replace();
    }
});
