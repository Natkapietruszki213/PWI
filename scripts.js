          function showSection(sectionId) {
                var sections = document.getElementsByClassName('section');
                for (var i = 0; i < sections.length; i++) {
                    sections[i].style.display = 'none';
                }
                
                var selectedSection = document.getElementById(sectionId);
                if (selectedSection) {
                    selectedSection.style.display = 'block';
                }
            }

            window.onload = function() {
                showSection('biography'); 
            };
                
            let currentPhotoIndex = 0;
            const photos = document.querySelectorAll('.photos_container img');

            function showPhoto(index) {
                photos.forEach((img, i) => {
                    img.style.display = (i === index) ? 'block' : 'none';
                });
            }

            function prevPhoto() {
                currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
                showPhoto(currentPhotoIndex);
            }

            function nextPhoto() {
                currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
                showPhoto(currentPhotoIndex);
            }

            showPhoto(currentPhotoIndex);
            
        function acceptCookies() {
            document.getElementById('cookie').style.display = 'none';
        }