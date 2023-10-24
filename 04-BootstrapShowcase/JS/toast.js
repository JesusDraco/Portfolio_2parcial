var myToast = new bootstrap.Toast(document.getElementById('myToast'));

document.getElementById('showToastBtn').addEventListener('click', function () {
    myToast.show();
});