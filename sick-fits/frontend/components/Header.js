import Link from 'next/link';
import Nav from './Nav';
import styled from 'styled-components';

const LogoStyles = styled.h1`
    background: red;
    font-size: 4rem;
    margin-left: 2rem;
    position: relative;
    transform: skew(-7deg);
    a {
        color: white;
        text-decoration: none;
        text-transformation: uppercase;
        padding: .5rem 1rem;
    }
`;

const HeaderStyles = styled.header`
    .bar {
        border-bottom: 10px solid var(--black, black);
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: center;
    }

    .sub-bar {
        display: grid;
        grid-template-column: 1fr auto;
        border-bottom: 1px solid var(--black, black);
    }
`;

export default function Header() {
    return (
        <HeaderStyles>
            <div className="bar">
            <LogoStyles>
                <Link href="/">
                    Sick fits
                </Link>
            </LogoStyles>
            </div>
            <div className="sub-bar">
                <p>search</p>
            </div>
            <Nav />
        </HeaderStyles>
    )
}