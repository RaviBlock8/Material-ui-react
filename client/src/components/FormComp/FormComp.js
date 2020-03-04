import React from 'react'
import {Button,Grid} from '@material-ui/core/'

function FormComp() {
    return (
        <div>
            <Grid container>
                <Grid item xs={4}>
                    <Button variant="contained">Default</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" color="primary">
                        Primary
                    </Button>
                </Grid>
            </Grid>

            
        </div>
    )
}

export default FormComp
