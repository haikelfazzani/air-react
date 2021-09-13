import React from 'react';
import './index.css';

const json = [
  {
    folder: 'folder_1', files: [
      { name: 'file_1' },
      { name: 'file_2' }
    ]
  },
  {
    folder: 'folder_2', files: [
      { name: 'file_1' },
      { name: 'file_2' },
      {
        folder: 'folder_2', files: [
          { name: 'file_1' },
          { name: 'file_2' }
        ]
      }
    ]
  }
]

export default function TreeView ({ children }) {

  return <ul>
    {React.Children.map(children, child =>
      React.cloneElement(child, { root: true })
    )}
  </ul>
}

const TreeItem = ({ children, label, root = false }) => {
  const expandable = children && React.Children.count(children) > 0;
  const [expanded, setExpanded] = React.useState(root);

  return expandable
    ? <ul>
      <li>
        <button>
          <span>
            \u25ba
          </span>
          {label}
        </button>
      </li>
      {expanded ? children : null}
    </ul>
    : <li>{label}</li>
};
