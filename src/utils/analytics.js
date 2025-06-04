// Analytics utility functions
export const trackEvent = (eventName, eventParams = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Track page views
export const trackPageView = (path) => {
  if (window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: path
    });
  }
};

// Track scroll depth
export const trackScrollDepth = () => {
  let maxScroll = 0;
  const scrollThresholds = [25, 50, 75, 100];

  const handleScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100
    );

    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      scrollThresholds.forEach(threshold => {
        if (maxScroll >= threshold && maxScroll < threshold + 25) {
          trackEvent('scroll_depth', {
            depth: threshold,
            page: window.location.pathname
          });
        }
      });
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
};

// Track time on page
export const trackTimeOnPage = () => {
  const startTime = Date.now();
  const timeThresholds = [30, 60, 120, 300]; // seconds
  let trackedThresholds = new Set();

  const checkTime = () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    
    timeThresholds.forEach(threshold => {
      if (timeSpent >= threshold && !trackedThresholds.has(threshold)) {
        trackEvent('time_on_page', {
          seconds: threshold,
          page: window.location.pathname
        });
        trackedThresholds.add(threshold);
      }
    });
  };

  const interval = setInterval(checkTime, 1000);
  return () => clearInterval(interval);
};

// Track external link clicks
export const trackExternalLink = (url) => {
  trackEvent('external_link_click', {
    link_url: url,
    page: window.location.pathname
  });
};

// Track project card clicks
export const trackProjectClick = (projectTitle) => {
  trackEvent('project_click', {
    project_title: projectTitle,
    page: window.location.pathname
  });
};

// Track testimonial interactions
export const trackTestimonialInteraction = (action, testimonialId) => {
  trackEvent('testimonial_interaction', {
    action,
    testimonial_id: testimonialId,
    page: window.location.pathname
  });
}; 