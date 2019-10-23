import React, { useState } from 'react';

import MenuItem from '../MenuItem';

import SECTIONS from './DirectoryData';

import './Directory.scss';

function Directory() {
  const [sections] = useState(SECTIONS);

  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}

export default Directory;
