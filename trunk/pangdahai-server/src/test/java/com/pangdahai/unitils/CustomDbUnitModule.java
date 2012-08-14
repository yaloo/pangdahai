package com.pangdahai.unitils;

import org.dbunit.database.DatabaseConfig;
import org.dbunit.ext.mysql.MySqlMetadataHandler;
import org.unitils.dbunit.DbUnitModule;
import org.unitils.dbunit.util.DbUnitDatabaseConnection;

/**
 * Author: gsj
 * DateTime: 12-8-14 上午10:31
 */
public class CustomDbUnitModule extends DbUnitModule {
    @Override
    protected DbUnitDatabaseConnection createDbUnitConnection(String schemaName) {
        {
            final DbUnitDatabaseConnection connection = super.createDbUnitConnection(schemaName);
            final DatabaseConfig config = connection.getConfig();
            config.setProperty(DatabaseConfig.PROPERTY_METADATA_HANDLER, new MySqlMetadataHandler());
            return connection;
        }
    }
}
