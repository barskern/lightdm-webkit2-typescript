(function() {
  interface Selection {
    user: LightDM.User,
    session: LightDM.Session
  }

  let _selected: Selection = {
    user: null,
    session: null
  }

  /**
	 * show_prompt callback.
	 */
	let show_prompt = (text: string, type: string): void => {
		// type is either "text" or "password"

	}
	/**
	 * show_message callback.
	 */
	let show_message = (text: string, type: string): void => {
		if (0 === text.length) return

	}

	/**
	 * authentication_complete callback.
	 */
	let authentication_complete = (): void => {
		if (lightdm.is_authenticated) {
      lightdm.start_session_sync(_selected.session);
		} else {
			show_message("Authentication Failed", "error");
			setTimeout(start_authentication, 3000);
		}
	};

  let start_authentication = (e, selected_user: LightDM.User): void => {
    if (!selected_user) return

    lightdm.authenticate(selected_user.username)
  }

  /**
   * autologin_timer_expired callback.
   */
  let autologin_timer_expired = (username: string): void => {}

})()
