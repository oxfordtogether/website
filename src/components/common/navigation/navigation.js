import React, { Component } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import { Menu, X } from "react-feather"

import { Link } from "gatsby"
import { Container } from "../../global"
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
  ActionsContainer,
} from "./style"

const NAV_ITEMS = [
  { title: "About", sectionId: "intro", pageURL: "" },
  { title: "Get involved", sectionId: "get-involved", pageURL: "" },
  { title: "FAQs", sectionId: null, pageURL: "faq" },
  { title: "Support", sectionId: null, pageURL: "referral-options" },
]

export default class Navigation extends Component {
  state = {
    mobileMenuOpen: false,
    hasScrolled: false,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 32) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }))
  }

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false })
    }
  }

  getNavAnchorLink = item => {
    const url = typeof window !== "undefined" ? window.location.href : ""

    if (item.sectionId | (item.pageURL === url.split("/").pop())) {
      return (
        <AnchorLink href={`#${item.sectionId}`} onClick={this.closeMobileMenu}>
          {item.title}
        </AnchorLink>
      )
    } else {
      return (
        <Link to={`${item.pageURL}`} onClick={this.closeMobileMenu}>
          {item.title}
        </Link>
      )
    }
  }

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(x => x.title)}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map((navItem, id) => (
          <NavItem key={`nav_${id}`}>{this.getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  )

  render() {
    const { mobileMenuOpen } = this.state

    return (
      <Nav {...this.props} scrolled={this.state.hasScrolled}>
        <StyledContainer>
          <Brand>
            <Scrollspy offset={-64} item={["top"]} currentClassName="active">
              <Link to="/">Oxford Together</Link>
            </Scrollspy>
          </Brand>

          <Mobile>
            <button
              onClick={this.toggleMobileMenu}
              style={{
                color: "black",
                background: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              {this.state.mobileMenuOpen ? (
                <X size={24} alt="close menu" />
              ) : (
                <Menu size={24} alt="open menu" style={{ marginRight: 5 }} />
              )}
              <span>Menu</span>
            </button>
          </Mobile>
          <ActionsContainer>
            <Mobile hide>{this.getNavList({})}</Mobile>
          </ActionsContainer>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    )
  }
}
