import React from 'react'
import { Match, Miss } from 'react-router'
import { connect } from 'react-redux'

import { showHeader } from '../actions/header'

import AddNetwork from '../components/networks/add-network'
import Header from '../components/shared/header'
import Footer from '../components/shared/footer'
import FoundVideos from '../components/my-video/found-videos'
import Login from './login'
import ManageConnections from '../components/settings/manage-connections'
import ModalSetting from '../components/shared/modal-setting'
import ModalSubs from '../components/shared/modal-editsubs'
import MyAccount from './my-account'
import MyVideo from './my-video'
import NetworkAdded from '../components/networks/network-added'
import Networks from './networks'
import NotFound from './no-match'
import Notifications from './notifications'
import Profile from '../components/my-account/profile'
import Settings from './settings'
import SubtitlesGenerated from '../components/notifications/subtitles-generated'
import VideosMedia from './videos-media'

const App = ({ showMainHeader }) => (
  <main>
    <Header isSubHead={ showMainHeader } />
    <Match exactly pattern="/" component={ Login } />
    <Match pattern="/add-network" component={ AddNetwork } />
    <Match pattern="/found-videos" component={ FoundVideos } />
    <Match pattern="/manage-connections" component={ ManageConnections } />
    <Match pattern="/my-account" component={ MyAccount } />
    <Match pattern="/my-video" component={ MyVideo } />
    <Match pattern="/network-added" component={ NetworkAdded } />
    <Match pattern="/networks" component={ Networks } />
    <Match pattern="/notifications" component={ Notifications } />
    <Match pattern="/profile" component={ Profile } />
    <Match pattern="/settings" component={ Settings } />
    <Match pattern="/subtitles-generated" component={ SubtitlesGenerated } />
    <Match pattern="/videos-media" component={ VideosMedia } />
    <Miss component={ NotFound } />
    <ModalSetting />
    <ModalSubs />
    <Footer />
  </main>
  )

export default connect(
  state => ({ ...state.header }),
  dispatch => ({
    showMainHeader: () => showHeader(dispatch)
  })
)(App)
