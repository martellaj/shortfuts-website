import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";

import "./Homepage.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://shortfuts.com/">
        shortfuts
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const a = {
  title: "keyboard shortfuts",
  price: "3.50",
  description: [
    "add keyboard shortcuts to common actions",
    "highlight good deals using FUT Alert data",
    "snipe faster with your fingers",
    "save and load your favorite sniping filters",
  ],
  buttonText: "buy 1 month",
  buttonVariant: "outlined",
};

const b = {
  title: "shortfuts auto",
  subheader: "fastest auto sniper",
  price: "50",
  description: [
    "snipe without lifting a finger",
    "human like behavior to prevent bans",
    "automatically list or store cards you win",
    "get notified via Discord as things happen",
    "intelligent auto bidder",
  ],
  buttonText: "buy now",
  buttonVariant: "contained",
};

const tiers = [
  {
    title: "keyboard shortfuts",
    price: "3.50",
    description: [
      "add keyboard shortcuts to common actions",
      "highlight good deals using FUT Alert data",
      "snipe faster with your fingers",
      "save and load your favorite sniping filters",
    ],
    buttonText: "buy 1 month",
    buttonVariant: "outlined",
  },
  {
    title: "shortfuts auto",
    subheader: "fastest auto sniper",
    price: "50",
    description: [
      "snipe without lifting a finger",
      "human like behavior to prevent bans",
      "automatically list or store cards you win",
      "get notified via Discord as things happen",
      "minimal bidding support (more to come!)",
    ],
    buttonText: "buy now",
    buttonVariant: "contained",
  },
];

const footers = [
  {
    title: "Links",
    description: ["Discord", "Demo", "Store", "Support"],
  },
  {
    title: "Socials",
    description: ["Twitter", "TikTok"],
  },
];

function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar
          sx={{ flexWrap: "wrap", display: "flex", justifyContent: "center" }}
        >
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="https://bit.ly/sf-discord"
              target="_blank"
              sx={{ my: 1, mx: 1.5 }}
            >
              Discord
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="https://youtu.be/DF4acQeJ54Y?t=987"
              target="_blank"
              sx={{ my: 1, mx: 1.5 }}
            >
              Demo
            </Link>
            <Link
              variant="button"
              color="text.primary"
              target="_blank"
              href="https://shortfuts.myshopify.com/"
              sx={{ my: 1, mx: 1.5 }}
            >
              Store
            </Link>
            <Link
              variant="button"
              color="text.primary"
              target="_blank"
              href="https://bit.ly/sf-discord"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          shortfuts
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          We've been providing FIFA Ultimate Team (FUT) players with the
          fastest, most reliable, and most valuable bots and tools for the FUT
          web app since FIFA 18! Get involved now!
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {/* ///////////////////////// */}
          {/* /// shortfuts auto ///*/}
          {/* ///////////////////////// */}
          <Grid
            item
            key={b.title}
            xs={12}
            sm={b.title === "Enterprise" ? 12 : 6}
            md={4}
            className="item"
          >
            <Card>
              <CardHeader
                title={b.title}
                subheader={b.subheader}
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{
                  align: "center",
                  sx: {
                    color: (theme) =>
                      b.title === "shortfuts auto"
                        ? theme.palette.primary.contrastText
                        : theme.palette.getContrastText(
                            theme.palette.grey[200]
                          ),
                  },
                }}
                sx={{
                  backgroundColor: (theme) =>
                    b.title === "shortfuts auto"
                      ? theme.palette.primary.main
                      : theme.palette.grey[200],
                  color: (theme) =>
                    b.title === "shortfuts auto"
                      ? theme.palette.primary.contrastText
                      : theme.palette.getContrastText(theme.palette.grey[200]),
                }}
              />
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    mb: 2,
                  }}
                >
                  <Typography component="h2" variant="h3" color="text.primary">
                    ${b.price}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {b.title === "keyboard shortfuts" ? "/mo" : ""}
                  </Typography>
                </Box>
                <ul>
                  {b.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={line}
                    >
                      &#x2022; {line}
                    </Typography>
                  ))}
                </ul>
                <a
                  href="https://shortfuts.myshopify.com/pages/shortfuts-auto-info"
                  target="_blank"
                  style={{
                    fontVariant: "small-caps",
                    marginTop: "10px",
                    backgroundColor: "#9dceff",
                    padding: "10px",
                    borderRadius: "4px",
                  }}
                >
                  FULL FEATURE LIST
                </a>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={b.buttonVariant}
                  onClick={() => {
                    if (b.title === "shortfuts auto") {
                      window.open(
                        "https://shortfuts.myshopify.com/collections/frontpage/products/shortfuts-auto-for-eafc-25",
                        "_blank"
                      );
                    } else if (b.title === "keyboard shortfuts") {
                      window.open(
                        "https://shortfuts.myshopify.com/collections/frontpage/products/copy-of-shortfuts-premium-1-month",
                        "_blank"
                      );
                    }
                  }}
                >
                  {b.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* ///////////////////////// */}
          {/* /// keyboard shortfuts ///*/}
          {/* ///////////////////////// */}
          <Grid
            item
            key={a.title}
            xs={12}
            sm={a.title === "Enterprise" ? 12 : 6}
            md={4}
            className="item"
          >
            <Card>
              <CardHeader
                title={a.title}
                subheader={a.subheader}
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{
                  align: "center",
                  sx: {
                    color: (theme) =>
                      a.title === "shortfuts auto"
                        ? theme.palette.primary.contrastText
                        : theme.palette.getContrastText(
                            theme.palette.grey[200]
                          ),
                  },
                }}
                sx={{
                  backgroundColor: (theme) =>
                    a.title === "shortfuts auto"
                      ? theme.palette.primary.main
                      : theme.palette.grey[200],
                  color: (theme) =>
                    a.title === "shortfuts auto"
                      ? theme.palette.primary.contrastText
                      : theme.palette.getContrastText(theme.palette.grey[200]),
                }}
              />
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    mb: 2,
                  }}
                >
                  <Typography component="h2" variant="h3" color="text.primary">
                    ${a.price}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {a.title === "keyboard shortfuts" ? "/mo" : ""}
                  </Typography>
                </Box>
                <ul>
                  {a.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={line}
                    >
                      &#x2022; {line}
                    </Typography>
                  ))}
                </ul>
                <a
                  href="https://shortfuts.myshopify.com/pages/shortfuts-info"
                  target="_blank"
                  style={{
                    fontVariant: "small-caps",
                    marginTop: "10px",
                    backgroundColor: "#eeeeee",
                    padding: "10px",
                    borderRadius: "4px",
                  }}
                >
                  FULL FEATURE LIST
                </a>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={a.buttonVariant}
                  onClick={() => {
                    if (a.title === "shortfuts auto") {
                      window.open(
                        "https://shortfuts.myshopify.com/collections/frontpage/products/shortfuts-auto-for-fifa-23",
                        "_blank"
                      );
                    } else if (a.title === "keyboard shortfuts") {
                      window.open(
                        "https://shortfuts.myshopify.com/collections/frontpage/products/copy-of-shortfuts-premium-1-month",
                        "_blank"
                      );
                    }
                  }}
                >
                  {a.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link
                      href={getDescriptionHref(item)}
                      target="_blank"
                      variant="subtitle1"
                      color="text.secondary"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

function getDescriptionHref(description) {
  switch (description) {
    case "Demo":
      return "https://youtu.be/DF4acQeJ54Y?t=987";
    case "Discord":
    case "Support":
      return "https://bit.ly/sf-discord";
    case "Store":
      return "https://shortfuts.myshopify.com/";
    case "TikTok":
      return "https://www.tiktok.com/@shortfuts_app";
    case "Twitter":
      return "https://twitter.com/shortfuts";
  }
}

export default function Pricing() {
  return <PricingContent />;
}
