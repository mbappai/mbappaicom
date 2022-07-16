import nightOwl from '@theme-ui/prism/presets/night-owl.json'

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
           14, 17, 20, 25, 32, 48, 61, 76
        ],
        space:[0,2,4,8,12,16,24,32,40,48],
        fontWeights: {
          normal: 400,
          medium: 500,
          bold: 700,
          xbold: 800
        },

        lineHeights: {
          body: 1.4,
          heading: 1.125,
          title: .9
        },
        letterSpacings: {
          body: '-0.04px',
          caps: '0.2em',
          listItem:'-0.04px'
        },
        text: {
              caps: {
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
              },
              link:{
                fontWeight:'medium',
                fontSize:1,
                lineHeight:'body',
                letterSpacing:'listItem',
                fontFamily:'body'
              },
              body:{
                fontWeight:'normal',
                fontSize:1,
                lineHeight:'body',
                letterSpacing:'listItem',
                fontFamily:'body'
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
                lineHeight:'title',
                mt: 4,
                mb: 3,
              },
              h2: {
                fontSize: 3,
                fontFamily: 'heading',
                fontWeight: 'bold',
                mt: 2,
                mb: 2,
              },
              h3:{
                fontSize: 3,
                fontFamily: 'heading',
                fontWeight: 'bold',
                mt: 4,
                mb: 2,
              },
              h4:{
                fontSize: 5,
                fontFamily: 'heading',
                fontWeight: 'bold',
                mt: 4,
                mb: 2,
              },
              p: {
                fontSize: 1,
                fontFamily: 'body',
                fontWeight: 'body',
                lineHeight:'body',
                letterSpacing:'body',
                mb: 4,
                mt: 1
              },
              li:{
                fontSize: 1,
                fontFamily: 'body',
                fontWeight: 'normal',
                lineHeight:'body',
                letterSpacing:'body',
                mb: 4,
                mt: 1
              },
              pre: {
                fontFamily: 'monospace',
                fontSize:3,
                bg: 'muted',
                p: 3,
                // borderRadius: 'code',
                overflowX: 'auto',
              },
              code:{
                fontFamily: 'monospace',
                fontSize: 2,
                backgroundColor: 'muted',
              }
            
            }
          
      
  }
  
  export default theme