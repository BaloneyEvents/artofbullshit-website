import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
      <script src="https://www.eventbrite.com.au/static/widgets/eb_widgets.js"></script>
      <script type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            var exampleCallback = function() {
              console.log('Order complete!');
            };

            window.EBWidgets.createWidget({
              widgetType: 'checkout',
              eventId: '91736579579',
              iframeContainerId: 'eventbrite-widget',
              iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
              onOrderComplete: exampleCallback  // Method called when an order has successfully completed
            });
          `
        }}
      />
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
