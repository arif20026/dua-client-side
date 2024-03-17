import CategoryList from "@/components/ui/CategoryList/CategoryList"
import { Box, Container, Grid } from "@mui/material"


const CategoriesLayout = ({children}) => {
    return (
        <Box>
            <Container>

                <Grid container spacing={2}>
                    <Grid item xs={3}>
              <CategoryList></CategoryList>
                    </Grid>
                    <Grid item xs={6}>

                        {children}
                 
                    </Grid>
                    <Grid item xs={3}>

                        <h3>Folks</h3>
                 
                    </Grid>
                   
                </Grid>

            </Container>

        </Box>
    )
}

export default CategoriesLayout 