
import React from 'react';

interface PixelArtProps {
  type: 'daisy' | 'tulip' | 'bunny' | 'bird';
  style: React.CSSProperties;
}

const PixelArtElement: React.FC<PixelArtProps> = ({ type, style }) => {
  switch (type) {
    case 'daisy':
      return (
        <div className="pixel-art-container pixel-flower-daisy" style={style}>
          {/* Petals - example of how block structure would be detailed in CSS */}
          <div className="pixel-block petal p1"></div>
          <div className="pixel-block petal p2"></div>
          <div className="pixel-block petal p3"></div>
          <div className="pixel-block petal p4"></div>
          <div className="pixel-block petal p5"></div>
          <div className="pixel-block petal p6"></div>
          <div className="pixel-block petal p7"></div>
          <div className="pixel-block petal p8"></div>
          <div className="pixel-block center"></div>
          <div className="pixel-block stem"></div>
        </div>
      );
    case 'tulip':
      return (
        <div className="pixel-art-container pixel-flower-tulip" style={style}>
          <div className="pixel-block petal p1"></div>
          <div className="pixel-block petal p2"></div>
          <div className="pixel-block petal p3"></div>
          <div className="pixel-block base"></div>
          <div className="pixel-block stem"></div>
        </div>
      );
    case 'bunny':
      return (
        <div className="pixel-art-container pixel-animal-bunny" style={style}>
          <div className="pixel-block pb earL"></div>
          <div className="pixel-block pb earR"></div>
          <div className="pixel-block earL-in"></div>
          <div className="pixel-block earR-in"></div>
          <div className="pixel-block pb head1"></div>
          <div className="pixel-block pb head2"></div>
          <div className="pixel-block eyeL"></div>
          <div className="pixel-block eyeR"></div>
          <div className="pixel-block nose"></div>
          <div className="pixel-block pb body1"></div>
          <div className="pixel-block pb footL"></div>
          <div className="pixel-block pb footR"></div>
          <div className="pixel-block pb tail"></div>
        </div>
      );
    case 'bird':
      return (
        <div className="pixel-art-container pixel-animal-bird" style={style}>
          <div className="pixel-block pab body"></div>
          <div className="pixel-block pab head"></div>
          <div className="pixel-block eye"></div>
          <div className="pixel-block beak"></div>
          <div className="pixel-block wing"></div>
          <div className="pixel-block tail"></div>
        </div>
      );
    default:
      return null;
  }
};

interface FunModeElementConfig {
  type: PixelArtProps['type'];
  count: number;
}

const FunModeElements: React.FC = () => {
  const elementsToRender: FunModeElementConfig[] = [
    { type: 'daisy', count: 2 },
    { type: 'tulip', count: 2 },
    { type: 'bunny', count: 1 },
    { type: 'bird', count: 2 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {elementsToRender.flatMap(group => 
        Array.from({ length: group.count }).map((_, i) => (
          <PixelArtElement
            key={`${group.type}-${i}`}
            type={group.type} 
            style={{
              left: `${Math.random() * 85 + 5}%`,
              top: `${Math.random() * 70 + 10}%`,
              animationDelay: `${Math.random() * 12}s`, // Slightly increased delay range
              transform: `scale(${0.9 + Math.random() * 0.7})`, // Scale from 0.9 to 1.6
            }}
          />
        ))
      )}
    </div>
  );
};

export default FunModeElements;