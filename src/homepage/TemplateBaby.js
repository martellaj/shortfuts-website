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
import StarIcon from "@mui/icons-material/StarBorder";
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
    price: "35",
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
  //   {
  //     title: "Enterprise",
  //     price: "30",
  //     description: [
  //       "50 users included",
  //       "30 GB of storage",
  //       "Help center access",
  //       "Phone & email support",
  //     ],
  //     buttonText: "Contact us",
  //     buttonVariant: "outlined",
  //   },
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
          We've been providing FUT players with the fastest, most reliable, and
          most valuable bots and tools since FIFA 18! Get involved now!
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => {
            return (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === "Enterprise" ? 12 : 6}
                md={4}
                className="item"
              >
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: "center" }}
                    action={
                      tier.title === "shortfuts auto" ? <StarIcon /> : null
                    }
                    subheaderTypographyProps={{
                      align: "center",
                      sx: {
                        color: (theme) =>
                          tier.title === "shortfuts auto"
                            ? theme.palette.primary.contrastText
                            : theme.palette.getContrastText(
                                theme.palette.grey[200]
                              ),
                      },
                    }}
                    sx={{
                      backgroundColor: (theme) =>
                        tier.title === "shortfuts auto"
                          ? theme.palette.primary.main
                          : theme.palette.grey[200],
                      color: (theme) =>
                        tier.title === "shortfuts auto"
                          ? theme.palette.primary.contrastText
                          : theme.palette.getContrastText(
                              theme.palette.grey[200]
                            ),
                    }}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "baseline",
                        mb: 2,
                      }}
                    >
                      <Typography
                        component="h2"
                        variant="h3"
                        color="text.primary"
                      >
                        ${tier.price}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        {tier.title === "keyboard shortfuts" ? "/mo" : ""}
                      </Typography>
                    </Box>
                    <ul>
                      {tier.description.map((line) => (
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
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant={tier.buttonVariant}
                      onClick={() => {
                        if (tier.title === "shortfuts auto") {
                          window.open(
                            "https://shortfuts.myshopify.com/collections/frontpage/products/shortfuts-auto-for-fifa-23",
                            "_blank"
                          );
                        } else if (tier.title === "keyboard shortfuts") {
                          window.open(
                            "https://shortfuts.myshopify.com/collections/frontpage/products/copy-of-shortfuts-premium-1-month",
                            "_blank"
                          );
                        }
                      }}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
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
