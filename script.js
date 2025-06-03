// Function to change the main product image when a thumbnail is clicked
function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
    
    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
        if (thumbnail.getAttribute('onclick').includes(imageSrc)) {
            thumbnail.classList.add('active');
        } else {
            thumbnail.classList.remove('active');
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Size selection functionality
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
        });
    });

    // Wishlist functionality
    const wishlistBtn = document.getElementById('wishlist-btn');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#e91e63';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '#555';
            }
        });
    }

    // Add to Cart functionality
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            // Get selected size
            const selectedSize = document.querySelector('.size-btn.active');
            if (!selectedSize) {
                alert('Please select a size');
                return;
            }
            
            alert(`Item added to cart! Size: ${selectedSize.textContent}`);
            // In a real application, you would add logic here to add the item to the cart
        });
    }

    // Back button functionality
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', function() {
            // In a real application, this would navigate back
            alert('Going back to previous page');
        });
    }

    // Share button functionality
    const shareButton = document.querySelector('.share-button');
    if (shareButton) {
        shareButton.addEventListener('click', function() {
            // In a real application, this would open a share dialog
            alert('Share this product');
        });
    }
});
