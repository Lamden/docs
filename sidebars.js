module.exports = {
	someSidebar: {
		'Documentation':[
			'index'
		],

		'Lamden Wallet': [
			'wallet/overview',
			'wallet/installation',
			'wallet/lock_unlock',
			{
				'Accounts': [
					'wallet/accounts_overview',
					'wallet/accounts_creation',
					'wallet/accounts_copy_address',
					'wallet/accounts_delete'
				],
				'Linked Accounts': [
					'wallet/accounts_linked_overview',
					'wallet/accounts_linked_create',
					'wallet/accounts_linked_approval',
					'wallet/accounts_linked_transfer',
					'wallet/accounts_linked_revoke'
				],
				'Transactions': [
					'wallet/transactions_overview',
					'wallet/transactions_create',
					'wallet/transactions_result',
					'wallet/transactions_history'
				],
				'Smart Contract IDE':[
					'wallet/ide_overview',
					'wallet/ide_create_smartcontracts',
					'wallet/ide_submit_smartcontract',
					'wallet/ide_run_smartcontracts'
				],
				'Backup Keys': [
					'wallet/backup_overview',
					'wallet/backup_keystore',
					'wallet/backup_view_keys'
				],
				'Restore Keys': [
					'wallet/restore_keystore',
					'wallet/restore_secret_key',
					'wallet/restore_linked_account'
				],
			},
			'wallet/token_swap',
			'wallet/change_network'
		],
		'Developers':[
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
