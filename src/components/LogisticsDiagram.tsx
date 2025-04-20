import React from 'react';
import './LogisticsDiagram.css';
import factory from '../assets/icons/factory.svg';
import mall from '../assets/icons/store_mall_directory.svg';
import store from '../assets/icons/storefront.svg';
import warehouse from '../assets/icons/warehouse.svg';

const LogisticsDiagram: React.FC = () => {
  const nodes = [
    { id: 'customer', label: 'Customer', top: 300, left: 0, icon: factory },
    { id: 'dc1', label: 'Distribution Center 1', top: 100, left: 210, icon: mall },
    { id: 'dc2', label: 'Distribution Center 2', top: 500, left: 200, icon: mall },
    { id: 'warehouse', label: 'Warehouse', top: 300, left: 480, icon: mall },
    { id: 'receiving1', label: 'Receiving Warehouse 1', top: 100, left: 650, icon: mall },
    { id: 'receiving2', label: 'Receiving Warehouse 2', top: 500, left: 650, icon: store },
    { id: 'dc3', label: 'Distribution Center 1', top: 100, left: 900, icon: store },
    { id: 'dc4', label: 'Distribution Center 2', top: 500, left: 900, icon: store },
    { id: 'consignee', label: 'Consignee', top: 300, left: 1100, icon: warehouse },
  ];

  const paths = [
    { id: 'path1', d: 'M60,340 C140,340 140,140 240,140' },
    { id: 'path2', d: 'M60,340 C140,340 140,540 240,540' },
    { id: 'path11', d: 'M270,140 270,540' },
    { id: 'path3', d: 'M290,140 C340,140 400,360 500,340' },
    { id: 'path4', d: 'M290,540 C340,540 360,360 500,340' },
    { id: 'path5', d: 'M540,340 C580,280 600,140 690,140' },
    { id: 'path6', d: 'M540,340 C580,360 600,540 690,540' },
    { id: 'path7', d: 'M740,140 C780,140 860,140 940,140' },
    { id: 'path8', d: 'M740,540 C780,540 860,540 940,540' },
    { id: 'path9', d: 'M990,140 C1060,140 1080,280 1160,340' },
    { id: 'path10', d: 'M990,540 C1060,540 1080,380 1160,340' },
  ];

  return (
    <div className="diagram-container">
      {/* Render nodes */}
      {nodes.map((node) => (
        <div key={node.id} style={{ position: 'absolute', top: node.top, left: node.left, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="node">
            <img src={node.icon} alt={node.label} className="node-icon" />
          </div>
          <div className="node-label">{node.label}</div>
        </div>

      ))}
      

      {/* SVG Lines + Animated Dots */}
      <svg width="100%" height="100%" className="lines">
        {paths.map((path) => (
          <React.Fragment key={path.id}>
            <path id={path.id} className="connector-line" d={path.d} />
            <circle r="5" fill="#BDFE02" className="moving-dot">
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href={`#${path.id}`} />
              </animateMotion>
            </circle>
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
};

export default LogisticsDiagram;
