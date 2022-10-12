// == Import
import AnimatedCursor from "react-animated-cursor"

// == Component
function AnimCursor() {
  return (
    <AnimatedCursor
      innerSize={30}
      outerSize={70}
      color='241, 209, 128'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="submit"]',
        'input[type="image"]',
        'input[type="number"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}

    />
  );
}

// == Export
export default AnimCursor;
