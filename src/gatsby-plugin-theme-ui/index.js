// example theme file
const theme = {
        // colors,
        fonts: {
          body: 'IBM Plex Sans Condensed, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
          heading: 'IBM Plex Sans Condensed, system-ui, Georgia, serif',
          monospace: 'IBM Plex Mono, monospace',
          title:'IBM Plex Sans Condensed, system-ui'
        },
        fontSizes: [
          12, 14, 16, 20, 25, 32, 48, 61, 76
        ],
        fontWeights: {
          normal: 400,
          medium: 500,
          bold: 700,
          xbold: 800
        },

        lineHeights: {
          body: 1.4,
          heading: 1.125,
          title: 1
        },
        letterSpacings: {
          body: 'normal',
          caps: '0.2em',
          listItem:'-0.08px'
        },
        text: {
              caps: {
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
              },
              list:{
                fontWeight:'medium',
                fontSize:2,
                lineHeight:'body',
                letterSpacing:'listItem',
                fontFamily:'body'
                // fontStyle:'italic'
              },
  

              heading: {
                fontFamily: 'heading',
                fontWeight: 'bold',
                lineHeight: 'heading',
              },
              title:{
                  fontFamily:'title',
                  fontWeight:'xbold',
                  lineHeight: 'heading',
                  letterSpacing:'heading',
                  fontSize: 6,
              },
              
            },
        styles: {
              h1: {
                fontSize: 4,
                fontFamily: 'heading',
                fontWeight: 'bold',
                mt: 4,
                mb: 2,
              },
              h2: {
                fontSize: 5,
                fontFamily: 'heading',
                fontWeight: 'bold',
                mt: 4,
                mb: 2,
              },
              p: {
                fontSize: 2,
                fontFamily: 'body',
                fontWeight: 'medium',
                lineHeight:'body',
                letterSpacing:'listItem',
                mb: 2,
              },
            }
          
      
  }
  
  export default theme