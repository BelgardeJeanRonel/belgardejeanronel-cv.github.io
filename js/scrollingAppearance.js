export const scrollingAnimation = {
    init : function() {
        const ratio = .1;
        const options = {
            root : null,
            rootMargin : "0px",
            threshold : ratio
        }

        const handleIntersect = function (entries, observer) {
            entries.forEach( entry => {
                if (entry.intersectionRatio > ratio){
                    entry.target.classList.remove("reveal");
                    observer.unobserve(entry.target);
                }
            })
        }

        document.documentElement.classList.add("reveal-loaded");
        const observer = new IntersectionObserver(handleIntersect, options);
        document.querySelectorAll('.reveal').forEach( r => {
            observer.observe(r)
        })
    }
} 