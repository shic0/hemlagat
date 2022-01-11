import { TextField } from "@material-ui/core";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField
        label='Sök din favoritmat här'
        variant="standard"
        fullWidth
        type='search'
        value={value}
        onChange={onChange}
        sx={{
            mb:"1.5rem"
        }}
    />;
};

export default Search;