import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = '663eefe93c01d6d88eb56cd64c6cbaa3';

mixpanel.init(MIXPANEL_TOKEN, {
  autocapture: true,
  record_sessions_percent: 100,
  debug: import.meta.env.DEV,
  track_pageview: true,
  persistence: 'localStorage',
});

export const analytics = {
  track: (event: string, properties?: Record<string, any>) => {
    mixpanel.track(event, properties);
  },

  identify: (userId: string) => {
    mixpanel.identify(userId);
  },

  trackPageView: (pageName: string) => {
    mixpanel.track('Page View', { page: pageName });
  },

  trackButtonClick: (buttonName: string, location: string) => {
    mixpanel.track('Button Click', { button: buttonName, location });
  },

  trackFormSubmit: (formName: string) => {
    mixpanel.track('Form Submit', { form: formName });
  },

  trackServiceView: (serviceName: string) => {
    mixpanel.track('Service Viewed', { service: serviceName });
  },
};

export default analytics;
