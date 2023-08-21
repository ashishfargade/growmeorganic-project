
import { useEffect, useState } from "react"
import { Data } from "../models/Interfaces"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const DataDisplay = () => {

    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        loadData();
    },[])

    const loadData = async() => {
        
        try {
            const rawData = await fetch('https://jsonplaceholder.typicode.com/posts')
                        .then((res) => res.json());

            const mappedData: Data[] = rawData.map((item:any)=> ({
                id: item.id,
                userId: item.userId,
                title: item.title,
                body: item.body
            }))
            console.log(mappedData[0])

            setData(mappedData);
            console.log(data[10]);

        } catch (error) {
            console.error('Error fetching user data:', error);
        }
        
    }


  return (
    <>
        {
            data.map((item: Data)=> {
                return <Box key={item.id}>
                    <Typography>
                        Title: {item.title}
                        userID: {item.userId}
                        body: {item.body}
                    </Typography>
                </Box>
            })
        }
    </>
  )
}
