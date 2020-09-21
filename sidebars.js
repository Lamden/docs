module.exports = {
	someSidebar: {
		'Documentation':[
			'index'
		],

		'Lamden Wallet': [
			{
				'Quickstart': [
					'wallet/overview',
					'wallet/installation'
				],
				'Accounts': [
					'wallet/accounts_overview',
					'wallet/accounts_creation',
					{
						'Linked Accounts': [
						'wallet/accounts_linked_overview',
						'wallet/accounts_linked_create'
						]
					}
				],
				'Backup & Restore Keys': [
					'wallet/backup',
					'wallet/restore'
				],
				'Token Swap': [
					'wallet/token_swap'
				]
			}
		],
		'Devlopers':[
			{'Lamden Wallet API':[
				'develop/wallet_api/overview',
				'develop/wallet_api/create_connection',
				'develop/wallet_api/customize_connection',
				'develop/wallet_api/get_wallet_info',
				'develop/wallet_api/send_transactions',
				'develop/wallet_api/approval_transactions'
			]}
		]
	}
};
