import { BsPersonCircle } from "react-icons/bs"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../../assets/theme"
import { LOGIN_PAGE, PROFILE_INFO } from "../../../../constant/loginPage"

type ProfileProps = {
  username: string | undefined
}

export default function Profile({ username }: ProfileProps) {
  return (
    <ProfileStyled>
      <div className="info">
        <p>
          {PROFILE_INFO.sayHi}<b>{username}</b>
        </p>
        <Link className="description" to="/">
          <small>{LOGIN_PAGE.returnTo}</small>
        </Link>
      </div>
      <div className="picture">
        <BsPersonCircle />
      </div>
    </ProfileStyled>
  )
}

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;
  padding-left: 50px;

  .info {
    text-align: right;
    margin-right: 10px;
    p {
      margin: 0;
      color: ${theme.colors.greyBlue};
      b {
        color: ${theme.colors.primary_bubble};
      }
    }
    a , .description {
        text-decoration: none;
        &:hover {
          text-decoration: underline;
          color: ${theme.colors.greyDark};
        }
        small {
          font-size: ${theme.fonts.size.XXS};
          color: ${theme.colors.greyBlue};
          font-weight: ${theme.fonts.weights.medium};
          text-decoration: none;
          position: relative;
          bottom: 2px;
        }
      }
  }

  .picture {
    /* border: 1px solid red; */
    height: auto;
    display: flex;
    height: 100%;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.pinky};
  }
`