import React from 'react'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

type Props = {}

const Loading = (props: Props) => {
    return (
        <div className='flex justify-center items-center'>
            <Box>
                <CircularProgress color='secondary' />

            </Box>

        </div>
    )
}

export default Loading