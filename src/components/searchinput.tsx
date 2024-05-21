import { SearchSvg } from "../icons";

import { TextField, InputAdornment, IconButton } from "@mui/material";
import { SvgIcon } from "@mui/material";

interface SearchInputProps {
  placeholder?: string;
}



const SearchInput: React.FC<SearchInputProps> = ({ placeholder }) => {

    
    
    
  return (
    <TextField
      variant="outlined"
      placeholder={placeholder || "Search..."}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton aria-label="search">
              <SvgIcon component={SearchSvg} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
