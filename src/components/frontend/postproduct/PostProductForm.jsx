import React, { useState, useReducer } from "react";
import "./PostAd.css";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Autocomplete,
  Box,
  Button,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  FormLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

function PostAd() {
  const categories = ["Property", "Vehicles", "Stocks"];
  const selectLocation = [
    "Addis Ababa",
    "Afar Region",
    "Amhara Region",
    "Benishangul-Gumuz Region",
    "Dire Dawa",
    "Gambela Region",
    "Harari Region",
    "Oromia Region",
    "SNNPR",
    "Somali Region",
    "Tigray Region",
  ];

  const subCategories = {
    Property: [
      "Commercial Property for Rent",
      "Commercial Property for Sale",
      "Event Centres, Venues Workstations",
      "House & Apartments for Rent",
      "House & Apartments for Sell",
      "Land & Plots for Sale",
      "Short Let Property",
    ],
    Vehicles: [
      "Buses & Microbuses",
      "Cars",
      "Heavy Equipment",
      "Motercycles & Scooters",
      "Trucks & Trailers",
      "Vehicle Parts & Accessories",
      "Watercraft & Boats",
    ],
  };

  const [nextPage, setNextpage] = useState(false);
  const [Property, setproperty] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState();
  const [price, setPrice] = useState("");
  const [selectCat, setSelectCat] = useState("");
  const [location, setLocation] = useState("");
  const [weight, setWeight] = useState("");
  const [image, setImage] = useState([]);
  const nexthandler = selectCat !== "" && location !== "" && image != "";

  const selectImage = (e) => {
    const selectedImage = e.target.files;
    const selectedImageArray = Array.from(selectedImage);
    const imageArray = selectedImageArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setImage(imageArray);
  };

  const Nextpage = () => {
    setNextpage(!nextPage);
  };

  const handlePrice = (e) => {
    const onlyNumber = /^[0-9\b]+$/;
    if (e.target.value === "" || onlyNumber.test(e.target.value)) {
      setPrice(e.target.value);
    }
  };
  const handleWeight = (e) => {
    const onlyNumber = /^[0-9\b]+$/;
    if (e.target.value === "" || onlyNumber.test(e.target.value)) {
      setWeight(e.target.value);
    }
  };

  return (
    <Box
      flexDirection="column"
      margin="10px 20px"
      sx={{
        bgcolor: "white",
        padding: "30px",
        // margin: "100px",

        md: {},
        xs: {},
        sm: {},
      }}
    >
      <Box
        sx={{
          margin: "10px auto 20px",
        }}
      >
        <TextField
          label="Categories"
          select
          search
          value={selectCat}
          onChange={(e) => setSelectCat(e.target.value)}
          fullWidth
          required
          helperText={"This field is required."}
        >
          {categories.map((item) => {
            return (
              <MenuItem key="item" value={item}>
                {item}
              </MenuItem>
            );
          })}
        </TextField>
      </Box>
      <Box
        sx={{
          margin: "10px auto 20px",
        }}
      >
        <Autocomplete
          options={selectLocation}
          value={location}
          onChange={(event, newValue) => {
            setLocation(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              required
              label="Select Location"
              variant="outlined"
              helperText={"This field is required."}
            />
          )}
        />
      </Box>
      <Box>
        <Typography variant="h6">Add photo</Typography>
        <Typography
          sx={{
            margin: "10px auto",
            color: "#6C8EA0",
            fontWeight: "700",
          }}
          variant="body1"
        >
          Add photos for this category
        </Typography>
        <Typography variant="subtitle2">
          First picture - is the title picture. You can change the order of
          photos: just grab your photos and drag
        </Typography>

        <Button
          sx={{
            backgroundColor: "#6C8EA0",
            height: "85px",
            width: "85px",
            borderRadius: "50px",
            marginTop: "22px",
            marginBottom: "15px",
            md: {},
            xs: {},
            sm: {},
          }}
          variant="contained"
          component="label"
        >
          <AddIcon
            sx={{
              fontSize: "50px",
            }}
          />
          <input
            onChange={selectImage}
            type="file"
            accept="image/jpeg, image/png"
            hidden
            multiple
          />
        </Button>
        <Box
          sx={{
            display: "flex",
            overflow: "auto",
            paddingRight: "10px",
          }}
        >
          {image.map((img, index) => {
            return (
              <div className="hoverImage" key={img}>
                <img width="83px" height="83px" src={img} alt="images" />
                <Button
                  className="delete"
                  onClick={() => setImage(image.filter((e) => e !== img))}
                >
                  <ClearIcon size="small" />
                </Button>
              </div>
            );
          })}
        </Box>
        <Typography variant="subtitle2">
          Each picture must not exceed 5 Mb
        </Typography>
        <Typography variant="subtitle2">
          Supported formats are *.jpeg and *.png
        </Typography>
      </Box>
      
      <Box
        sx={{
          margin: "30px auto",
        }}
      >
        <TextField
          type="text"
          label="Link to youtube videos"
          size="small"
          fullWidth
        />
      </Box>
      <Box>
        {!nextPage ? (
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={Nextpage}
            disabled={!nexthandler}
          >
            NEXT
          </Button>
        ) : (
          <Box
            flexDirection="column"
            sx={{
              bgcolor: "white",
              padding: "10px",
              md: {
                height: "667px",
                backgroundColor: "white",
                color: "black",
                padding: "20px",
                margin: "10px auto",
                //   width: "600",
              },
              xs: {
                //   width: "360",
                backgroundColor: "fffff",
              },
              sm: {
                //   width: "500",
                backgroundColor: "black",
              },
            }}
          >
            <Box
              sx={{
                margin: "30px auto",
              }}
            >
              <TextField
                label="Title"
                size="small"
                required
                fullWidth
                inputProps={{ maxLength: 20 }}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                error={!title}
                helperText={!title ? "This field is required." : ""}
              />
            </Box>
            <Box
              sx={{
                margin: "30px auto",
              }}
            >
              <TextField label="Address" size="small" required fullWidth />
            </Box>

            {selectCat === categories[0] ? (
              <Box>
                {" "}
                <Box
                  sx={{
                    margin: "10px auto 20px",
                  }}
                >
                  <TextField
                    label="Property Type"
                    select
                    // value={country}
                    // onChange={handleChange}
                    fullWidth
                    required
                  >
                    <MenuItem value="property">Property</MenuItem>
                    <MenuItem value="vehicles">Vehicles</MenuItem>
                    <MenuItem value="stock">Stock</MenuItem>
                  </TextField>
                </Box>
                <Box
                  sx={{
                    margin: "10px auto 20px",
                  }}
                >
                  <TextField
                    label="Condition"
                    select
                    // value={country}
                    // onChange={handleChange}
                    fullWidth
                    required
                  >
                    <MenuItem value="am">Fairly Used</MenuItem>
                    <MenuItem value="gurage">Newly-Built</MenuItem>
                    <MenuItem value="dire">Old</MenuItem>
                  </TextField>
                </Box>
                <Box
                  sx={{
                    margin: "10px auto 20px",
                    fontWeight: "700",
                  }}
                >
                  <TextField
                    label="Weight"
                    value={weight}
                    onChange={handleWeight}
                    required
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">KG</InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    margin: "10px auto 20px",
                    fontWeight: "700",
                  }}
                >
                  <TextField
                    label="Price"
                    required
                    value={price}
                    onChange={handlePrice}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">ETB</InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </Box>
            ) : (
              ""
            )}
            {selectCat === categories[1] ? (
              <Box>
                <Box
                  sx={{
                    margin: "10px auto 20px",
                  }}
                >
                  <TextField
                    label="Model"
                    select
                    // value={country}
                    // onChange={handleChange}
                    fullWidth
                    required
                  >
                    <MenuItem value="addis">Addis Ababa</MenuItem>
                    <MenuItem value="amhara">Amhara</MenuItem>
                    <MenuItem value="gurage">Gurage</MenuItem>
                    <MenuItem value="dire">Dire Dawa</MenuItem>
                    <MenuItem value="harer">harer</MenuItem>
                    <MenuItem value="afar">Afar</MenuItem>
                  </TextField>
                </Box>
                <Box
                  sx={{
                    margin: "10px auto 20px",
                  }}
                >
                  <TextField
                    label="Model"
                    select
                    // value={country}
                    // onChange={handleChange}
                    fullWidth
                    required
                  >
                    <MenuItem value="addis">Addis Ababa</MenuItem>
                    <MenuItem value="amhara">Amhara</MenuItem>
                    <MenuItem value="gurage">Gurage</MenuItem>
                    <MenuItem value="dire">Dire Dawa</MenuItem>
                    <MenuItem value="harer">harer</MenuItem>
                    <MenuItem value="afar">Afar</MenuItem>
                  </TextField>
                </Box>
              </Box>
            ) : (
              ""
            )}

            <Box
              sx={{
                margin: "30px auto",
              }}
            >
              <TextField
                label="description"
                size="large"
                required
                fullwidth
                // inputProps={{ minLength: 20, maxLength: 1000 }}
                // value={value}
                // onChange={(e) => setValue(e.target.value)}
                // error={!value}
                // helperText={!value ? "This field is required." : ""}
              />
            </Box>
            <Box>
              <FormControlLabel
                color="success"
                label="Negotiable"
                control={<Checkbox />}
              />
            </Box>

            <Box
              sx={{
                margin: "20px 250px 5px ",
                alignItems: "center",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="success"
                size="large"
              >
                submit
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default PostAd;