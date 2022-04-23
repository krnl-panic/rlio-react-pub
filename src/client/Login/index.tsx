import React, {useCallback} from 'react'
import {Modal, Image} from 'antd'
import styled from 'styled-components'
import {DiscordLoginButton} from 'react-social-login-buttons'
import {useHref} from 'react-router-dom'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24292e;
  width: 100vw;
  height: 100vh;
`

const LoginContent = styled.div`
  display: flex;
  width: 100%;
  height: 240px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`

const LoginForm = () => {
  const authUrl = useHref('/auth')
  const logoSrc = useHref('/assets/images/logo.svg')
  console.log('Logo src: ', logoSrc)
  const handleDiscordLogin = useCallback(() => {
    window.location.href = authUrl
  }, [])

  return (
    <>
      <Container>
        <Modal title={null} visible={true} footer={null} closable={false}>
          <LoginContent>
            <img
              src={logoSrc}
              alt="logo"
              style={{
                width: 192,
                height: 192,
                maxWidth: 512,
                maxHeight: 512,
                minWidth: 128,
                minHeight: 128,
                margin: 16,
              }}
            />
            <div style={{width: 240}}>
              <DiscordLoginButton
                onClick={handleDiscordLogin}
              />
            </div>
          </LoginContent>
        </Modal>
      </Container>
    </>
  )
}

export default LoginForm
