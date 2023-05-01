import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useMemo, useState } from "react";
import MaterialReactTable, { type MRT_ColumnDef } from "material-react-table";
import { useGetProducts } from "../../hooks/api/products";
import { Product } from "../../types/product";
import useHandleStateUpdates from "../../hooks/useHandleStateUpdates";
import Pagination from "@mui/material/Pagination";
const limit = 10;
const Home = () => {
  const [skip, setSkip] = useState(0);
  const { data } = useGetProducts({ limit, skip });
  const [count, setCount] = useState(0);
  useHandleStateUpdates(data, () => {
    if (data?.total) setCount(Math.ceil(data?.total / limit));
  });
  const columns = useMemo<MRT_ColumnDef<Product>[]>(
    () => [
      {
        accessorKey: "id",
        header: "Id",
        size: 15,
        maxSize: 15,
        minSize: 15,
        Cell: ({ row }) => <Typography>{row.original.id}</Typography>,
      },
      {
        accessorKey: "description",
        header: "Description",
        size: 45,
        maxSize: 45,
        minSize: 45,
        Cell: ({ row }) => <Typography>{row.original.description}</Typography>,
      },
      {
        accessorKey: "title",
        header: "Title",
        size: 45,
        maxSize: 45,
        minSize: 45,
        Cell: ({ row }) => <Typography>{row.original.title}</Typography>,
      },
      {
        accessorKey: "price",
        header: "Price",
        size: 15,
        maxSize: 15,
        minSize: 15,
        Cell: ({ row }) => <Typography>{row.original.price}</Typography>,
      },
    ],
    []
  );

  return (
    <Box>
      <Typography variant="h1">Products</Typography>
      <MaterialReactTable
        columns={columns}
        data={data?.products || []}
        enableColumnActions={false}
        enableColumnFilters={false}
        enablePagination={false}
        enableSorting={false}
        enableBottomToolbar={false}
        enableTopToolbar={false}
        muiTableBodyRowProps={{ hover: false }}
      />
      <Pagination
        sx={{ mt: "30px", mx: "auto", maxWidth: "500px" }}
        count={count}
        onChange={(e, page) => {
          setSkip((page - 1) * 10);
        }}
      />
    </Box>
  );
};

export default Home;
