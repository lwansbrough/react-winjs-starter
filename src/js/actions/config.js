import * as ConfigurationService from '../services/config';

export const FETCH_CONFIG_PENDING = 'FETCH_CONFIG_PENDING';
export const FETCH_CONFIG_FULFILLED = 'FETCH_CONFIG_FULFILLED';
export const FETCH_CONFIG_REJECTED = 'FETCH_CONFIG_REJECTED';

export function fetch(options) {
  return {
    type: FETCH_CONFIG_FULFILLED,
    config: {
      pages: [
        {
          id: 1,
          template: 'Welcome'
        },
        {
          id: 2,
          template: 'Welcome'
        }
      ],
      tabs: [
        {
          id: 1,
          pageId: 1,
          title: 'Home',
          badge: '1',
          systemIcon: 'contacts',
          selected: true
        },
        {
          id: 2,
          pageId: 2,
          title: 'Favorites',
          badge: '1',
          systemIcon: 'favorites',
          selected: true
        }
      ]
    }
  };
  
  // return {
  //   types: [
  //     FETCH_CONFIG_PENDING,
  //     FETCH_CONFIG_FULFILLED,
  //     FETCH_CONFIG_REJECTED            
  //   ],
  //   payload: ConfigurationService.fetch()
  // };
};