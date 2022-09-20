/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Nav, Button } from 'react-bootstrap';
import UserProfile from './ProfileModal';
// import SearchBar from './SearchBar';

export default function NavBar() {
  return (
    <Nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link passHref href="/">
          <img className="logo" src="/images/warlock2.png" alt="warlock" />
        </Link>
        <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </Button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link passHref href="/campaigns">
                <Nav.Link>Campaigns</Nav.Link>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/characters">
                <Nav.Link>Characters</Nav.Link>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/cast">
                <Nav.Link>Creatures</Nav.Link>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/npc">
                <Nav.Link>Npc</Nav.Link>
              </Link>
            </li>
          </ul>
          <UserProfile />
        </div>
      </div>
    </Nav>
  );
}
