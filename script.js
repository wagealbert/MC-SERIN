// ===== Cloudflare Protection Script =====
(function () {
    function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
            var d = b.createElement('script');
            d.innerHTML =
                "window.__CF$cv$params={r:'978884ad69bee228',t:'MTc1Njc2OTAzNg=='};" +
                "var a=document.createElement('script');" +
                "a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';" +
                "document.getElementsByTagName('head')[0].appendChild(a);";
            b.getElementsByTagName('head')[0].appendChild(d);
        }
    }

    if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);

        if (document.readyState !== 'loading') {
            c();
        } else if (window.addEventListener) {
            document.addEventListener('DOMContentLoaded', c);
        } else {
            var e = document.onreadystatechange || function () {};
            document.onreadystatechange = function (b) {
                e(b);
                if (document.readyState !== 'loading') {
                    document.onreadystatechange = e;
                    c();
                }
            };
        }
    }
})();

// ===== Real-Time Verification Timestamp =====
function formatTime(date) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };

    return new Intl.DateTimeFormat('id-ID', options).format(date);
}

function updateVerifyTime() {
    const now = new Date();
    const formatted = formatTime(now);
    const target = document.getElementById('verify-time');
    if (target) {
        target.textContent = formatted;
    }
}

updateVerifyTime();
setInterval(updateVerifyTime, 60000);
