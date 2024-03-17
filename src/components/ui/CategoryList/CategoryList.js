import { getAllCategories } from "@/utils/getAllCategories";
import { CategoryRounded } from "@mui/icons-material";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const CategoryList = async () => {
  const allCategories  = await getAllCategories();
    console.log(allCategories);

  return (
    <Box className="mt-5 bg-gray-100 px-5 py-2">
      <Typography variant="h6">Categories</Typography>
      <Divider />
      <Stack rowGap={1} sx={{ mt: 2.5 }}>

        {allCategories?.length}
    
        {allCategories?.map((category) => (
          <Button variant="outlined" key={category.id}>
            <Link
              href={`/duas/${category.cat_name_bn}?cat=${category.cat_id}`}
            >
              {category.cat_name_bn}
            </Link>
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default CategoryList;
