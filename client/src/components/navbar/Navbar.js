import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

function Navbar() {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="subtitle" color="inherit">
                        React and material ui application
                    </Typography>
                </Toolbar>
            </AppBar>
            
        </div>
    )
}


export default Navbar
