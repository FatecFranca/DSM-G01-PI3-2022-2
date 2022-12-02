import React from 'react'
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';


export default function input({register}) {
  return (
    <div>
         <Stack display="flex" direction="row">
                        <TextField       
                            label="Questões"
                            variant="filled"
                            disabled
                            size="small"
                            id="filled-basic"
                            type="text"
                            {...register("question")}
                            sx={{ width: "500px", marginLeft: "5px", marginTop: "-25px", bgcolor: "#fff", borderRadius: "5px", border: "1px solid #3ea5e5", }}
                        />
                        <TextField
                            disabled
                            size="small"
                            id="filled-basic"
                            variant="filled"
                            type="text"
                            {...register("answer")}
                            sx={{ width: "100px", marginLeft: "5px", marginTop: "-25px", bgcolor: "#fff", borderRadius: "5px", border: "1px solid #3ea5e5", }}
                        />
                    </Stack>
    </div>
  )
}
