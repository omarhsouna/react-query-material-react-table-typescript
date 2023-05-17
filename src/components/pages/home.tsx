import { Button, Stack, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useMemo, useState } from "react";
import MaterialReactTable, {
  MRT_SortingState,
  type MRT_ColumnDef,
} from "material-react-table";
import { useGetProducts } from "../../hooks/api/products";
import { Product } from "../../types/product";
import Pagination from "@mui/material/Pagination";
import { FilterType } from "../../types";
const limit = 10;

const getSortStateApi = <T,>(param: { id: keyof T; desc: boolean }) => ({
  [param.id]: param.desc ? "desc" : "asc",
});

const Home = () => {
  const [page, setPage] = useState(1);
  const [sorting, setSorting] = useState<MRT_SortingState>([
    { id: "title", desc: true },
  ]);
  const [filter, setFilter] = useState<FilterType<Product>>({});
  const [filterText, setFilterText] = useState<FilterType<Product>>({});
  const { data } = useGetProducts({
    limit,
    page,
    sort: getSortStateApi(sorting[0]),
    filter,
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
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText((filterText) => ({
      ...filterText,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Box>
      <Typography variant="h1">Products</Typography>
      <Stack spacing={2} direction="row" mb="20px">
        <TextField
          value={filterText.title}
          name="title"
          onChange={handleFilter}
        />
        <TextField
          value={filterText.price}
          name="price"
          onChange={handleFilter}
        />
        <Button variant="contained" onClick={() => setFilter(filterText)}>
          Search
        </Button>
      </Stack>
      <MaterialReactTable
        columns={columns}
        data={data?.products || []}
        enableColumnActions={false}
        enableColumnFilters={false}
        enablePagination={false}
        enableSortingRemoval={false}
        enableMultiSort={false}
        manualSorting
        state={{ sorting }}
        onSortingChange={(params) => {
          setPage(1);
          setSorting(params);
        }}
        enableBottomToolbar={false}
        enableTopToolbar={false}
        muiTableBodyRowProps={{ hover: false }}
        localization={{
          unsorted: "",
          sortByColumnAsc: "",
          sortByColumnDesc: "",
          sortedByColumnAsc: "",
          sortedByColumnDesc: "",
        }}
      />
      <Pagination
        sx={{ mt: "30px", mx: "auto", maxWidth: "500px" }}
        page={page}
        count={data?.pages || 0}
        onChange={(e, index) => {
          setPage(index);
        }}
      />
    </Box>
  );
};

export default Home;
