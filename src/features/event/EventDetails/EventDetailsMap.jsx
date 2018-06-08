import React from 'react';
import { Segment } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

import Marker from '../../../app/common/Marker';

const EventDetailsMap = ({ lat, lng }) => {
  const center = {lat, lng};
  const zoom = 14;
  return (
    <Segment attached="bottom" style={{padding: 0}}>
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD225l5V8DXgDW6Dsf_SF-yF_WQVkg9_YY' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker lat={lat} lng={lng} />
        </GoogleMapReact>
      </div>
    </Segment>
  );
};

export default EventDetailsMap;
