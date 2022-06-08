// example theme file
const theme = {
        // colors,
        fonts: {
          body: 'IBM Plex Sans system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
          heading: 'IBM Plex Sans, Georgia, serif',
          monospace: 'Menlo, monospace',
          title:'Bitter, Georgia'
        },
        fontSizes: [
          12, 14, 16, 20, 24, 32, 48, 64
        ],
        fontWeights: {
          normal: 400,
          medium: 500,
          bold: 700,
        },

        lineHeights: {
          body: 1.5,
          heading: 1.125,
          title: 1
        },
        letterSpacings: {
          body: 'normal',
          caps: '0.2em',
          listItem:'-0.04px'
        },
        text: {
              caps: {
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
              },
              list:{
                fontWeight:'medium',
                fontSize:3,
                lineHeight:'body',
                letterSpacing:'listItem',
                textDecorationStyle:'underline dotted red'
              },

              heading: {
                fontFamily: 'heading',
                fontWeight: 'heading',
                lineHeight: 'heading',
              },
              title:{
                  fontFamily:'title',
                //   fontWeight:'bold',
                //   lineHeight: 'heading',
                //   letterSpacing:'heading',
                  fontSizes:[7]
              }
            },
          
      
  }
  
  export default theme